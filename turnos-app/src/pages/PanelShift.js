import { useDispatch, useSelector } from "react-redux";
import NavBar from "../components/NavBar";

const PanelShift = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => {
    return state.auth;
  });

  return (
    <div>
      <div className="clientefinal-paneldereservas-clientefinal-paneldereservas1">
        <NavBar />
        <span className="clientefinal-paneldereservas-text1 ">
          <span>Hacer una reserva</span>
        </span>
        <div className="clientefinal-paneldereservas-reserva">
          <div className="clientefinal-paneldereservas-content">
            <div className="clientefinal-paneldereservas-head">
              <span className="clientefinal-paneldereservas-text002 Semibold·18·24">
                <span>Reserva</span>
              </span>
              <span className="clientefinal-paneldereservas-text004 Regular·14·20">
                <span>Completá el formulario</span>
              </span>
            </div>
            <div className="clientefinal-paneldereservas-stepper">
              {/* <div className="clientefinal-paneldereservas-step">
                <div className="clientefinal-paneldereservas-step1">
                  <img
                    src="/playground_assets/borderi132-sbg-200h.png"
                    alt="BorderI132"
                    className="clientefinal-paneldereservas-border"
                  />
                  <div className="clientefinal-paneldereservas-icon">
                    <div className="clientefinal-paneldereservas-user-interface">
                      <img
                        src="/playground_assets/unioni132-7b4o.svg"
                        alt="UnionI132"
                        className="clientefinal-paneldereservas-union"
                      />
                    </div>
                  </div>
                  <img
                    src="/playground_assets/borderi132-9gfb-200h.png"
                    alt="BorderI132"
                    className="clientefinal-paneldereservas-border1"
                  />
                </div>
                <span className="clientefinal-paneldereservas-text006 Regular·14·20">
                  <span>Elegí tu sucursal</span>
                </span>
              </div>
              <div className="clientefinal-paneldereservas-step2">
                <div className="clientefinal-paneldereservas-step3">
                  <img
                    src="/playground_assets/borderi132-14f4-200h.png"
                    alt="BorderI132"
                    className="clientefinal-paneldereservas-border2"
                  />
                  <div className="clientefinal-paneldereservas-icon1">
                    <div className="clientefinal-paneldereservas-user-interface1">
                      <img
                        src="/playground_assets/unioni132-s093.svg"
                        alt="UnionI132"
                        className="clientefinal-paneldereservas-union1"
                      />
                    </div>
                  </div>
                  <img
                    src="/playground_assets/borderi132-yjk-200h.png"
                    alt="BorderI132"
                    className="clientefinal-paneldereservas-border3"
                  />
                </div>
                <span className="clientefinal-paneldereservas-text008 Regular·14·20">
                  <span>Seleccioná el día</span>
                </span>
              </div>
              <div className="clientefinal-paneldereservas-step4">
                <div className="clientefinal-paneldereservas-step5">
                  <img
                    src="/playground_assets/borderi132-nsoc2-200h.png"
                    alt="BorderI132"
                    className="clientefinal-paneldereservas-border4"
                  />
                  <div className="clientefinal-paneldereservas-icon2">
                    <div className="clientefinal-paneldereservas-user-interface2">
                      <img
                        src="/playground_assets/unioni132-bz39.svg"
                        alt="UnionI132"
                        className="clientefinal-paneldereservas-union2"
                      />
                    </div>
                  </div>
                  <img
                    src="/playground_assets/borderi132-1o98-200h.png"
                    alt="BorderI132"
                    className="clientefinal-paneldereservas-border5"
                  />
                </div>
                <span className="clientefinal-paneldereservas-text010 Regular·14·20">
                  <span>Completá el formulario</span>
                </span>
              </div> */}
            </div>
            <form>
              <div className="clientefinal-paneldereservas-inputs">
                <div className="clientefinal-paneldereservas-input-desktop2">
                  <div className="clientefinal-paneldereservas-txt">
                    <span className="clientefinal-paneldereservas-text012 Regular·14·20">
                      <span>Sucursal</span>
                    </span>
                  </div>
                  <select className="clientefinal-paneldereservas-input-desktop1">
                    <option className="clientefinal-paneldereservas-text014 Regular·14·20">
                      Villa Crespo
                    </option>
                  </select>
                </div>
                <div className="clientefinal-paneldereservas-input-desktop3">
                  <div className="clientefinal-paneldereservas-txt1">
                    <span className="clientefinal-paneldereservas-text016 Regular·14·20">
                      <span>Horario</span>
                    </span>
                  </div>
                  <select className="clientefinal-paneldereservas-input-desktop11">
                    <option className="clientefinal-paneldereservas-text018 Regular·14·20">
                      De 10:00 a 17:00 hs
                    </option>
                  </select>
                </div>
                <div className="clientefinal-paneldereservas-fila">
                  <div className="clientefinal-paneldereservas-input-desktop21">
                    <div className="clientefinal-paneldereservas-txt2">
                      <span className="clientefinal-paneldereservas-text020 Regular·14·20">
                        <span>Nombre y Apellido</span>
                      </span>
                    </div>
                    <input
                      type="text"
                      className="clientefinal-paneldereservas-input-desktop12"
                    />
                  </div>
                  <div className="clientefinal-paneldereservas-input-desktop31">
                    <div className="clientefinal-paneldereservas-txt3">
                      <span className="clientefinal-paneldereservas-text022 Regular·14·20">
                        <span>Teléfono</span>
                      </span>
                    </div>
                    <input
                      type="text"
                      className="clientefinal-paneldereservas-input-desktop13"
                    />
                  </div>
                </div>
                <div className="clientefinal-paneldereservas-input-desktop22">
                  <div className="clientefinal-paneldereservas-txt4">
                    <span className="clientefinal-paneldereservas-text024 Regular·14·20">
                      <span>Mail</span>
                    </span>
                  </div>
                  <input
                    type="email"
                    className="clientefinal-paneldereservas-input-desktop14"
                  />
                </div>
              </div>
            </form>
          </div>
          <button className="clientefinal-paneldereservas-c-t-a-desktop10">
            <span className="clientefinal-paneldereservas-text026 Semibold·16·20">
              <span>Confirmar reserva</span>
            </span>
          </button>
        </div>
        <div className="clientefinal-paneldereservas-calendar">
          <div className="clientefinal-paneldereservas-months">
            <span className="clientefinal-paneldereservas-text028 Semibold·18·24">
              <span>Octubre 2022</span>
            </span>
          </div>
          <div className="clientefinal-paneldereservas-days">
            <div className="clientefinal-paneldereservas-days1">
              <div className="clientefinal-paneldereservas-days2">
                <span className="clientefinal-paneldereservas-text030">
                  <span>Do</span>
                </span>
              </div>
              <div className="clientefinal-paneldereservas-days3">
                <span className="clientefinal-paneldereservas-text032">
                  <span>Lu</span>
                </span>
              </div>
              <div className="clientefinal-paneldereservas-days4">
                <span className="clientefinal-paneldereservas-text034">
                  <span>Ma</span>
                </span>
              </div>
              <div className="clientefinal-paneldereservas-days5">
                <span className="clientefinal-paneldereservas-text036">
                  <span>Mi</span>
                </span>
              </div>
              <div className="clientefinal-paneldereservas-days6">
                <span className="clientefinal-paneldereservas-text038">
                  <span>Ju</span>
                </span>
              </div>
              <div className="clientefinal-paneldereservas-days7">
                <span className="clientefinal-paneldereservas-text040">
                  <span>Vi</span>
                </span>
              </div>
              <div className="clientefinal-paneldereservas-days8">
                <span className="clientefinal-paneldereservas-text042">
                  <span>Sa</span>
                </span>
              </div>
            </div>
            <div className="clientefinal-paneldereservas-weeklys">
              <div className="clientefinal-paneldereservas-weekly">
                <div className="clientefinal-paneldereservas-dayselect">
                  <span className="clientefinal-paneldereservas-text044">
                    <span>31</span>
                  </span>
                </div>
                <div className="clientefinal-paneldereservas-dayselect01">
                  <span className="clientefinal-paneldereservas-text046">
                    1
                  </span>
                </div>
                <div className="clientefinal-paneldereservas-dayselect02">
                  <span className="clientefinal-paneldereservas-text047">
                    2
                  </span>
                </div>
                <div className="clientefinal-paneldereservas-dayselect03">
                  <span className="clientefinal-paneldereservas-text048">
                    3
                  </span>
                </div>
                <div className="clientefinal-paneldereservas-dayselect04">
                  <span className="clientefinal-paneldereservas-text049">
                    4
                  </span>
                </div>
                <div className="clientefinal-paneldereservas-dayselect05">
                  <span className="clientefinal-paneldereservas-text050">
                    5
                  </span>
                </div>
                <div className="clientefinal-paneldereservas-dayselect06">
                  <span className="clientefinal-paneldereservas-text051">
                    6
                  </span>
                </div>
              </div>
              <div className="clientefinal-paneldereservas-weekly1">
                <div className="clientefinal-paneldereservas-dayselect07">
                  <span className="clientefinal-paneldereservas-text052">
                    7
                  </span>
                </div>
                <div className="clientefinal-paneldereservas-dayselect08">
                  <span className="clientefinal-paneldereservas-text053">
                    8
                  </span>
                </div>
                <div className="clientefinal-paneldereservas-dayselect09">
                  <span className="clientefinal-paneldereservas-text054">
                    9
                  </span>
                </div>
                <div className="clientefinal-paneldereservas-dayselect10">
                  <span className="clientefinal-paneldereservas-text055">
                    <span>10</span>
                  </span>
                </div>
                <div className="clientefinal-paneldereservas-dayselect11">
                  <span className="clientefinal-paneldereservas-text057">
                    <span>11</span>
                  </span>
                </div>
                <div className="clientefinal-paneldereservas-dayselect12">
                  <span className="clientefinal-paneldereservas-text059">
                    <span>12</span>
                  </span>
                </div>
                <div className="clientefinal-paneldereservas-dayselect13">
                  <span className="clientefinal-paneldereservas-text061">
                    <span>13</span>
                  </span>
                </div>
              </div>
              <div className="clientefinal-paneldereservas-weekly2">
                <div className="clientefinal-paneldereservas-dayselect14">
                  <span className="clientefinal-paneldereservas-text063">
                    <span>14</span>
                  </span>
                </div>
                <div className="clientefinal-paneldereservas-dayselect15">
                  <span className="clientefinal-paneldereservas-text065">
                    <span>15</span>
                  </span>
                </div>
                <div className="clientefinal-paneldereservas-dayselect16">
                  <span className="clientefinal-paneldereservas-text067">
                    <span>16</span>
                  </span>
                </div>
                <div className="clientefinal-paneldereservas-dayselect17">
                  <span className="clientefinal-paneldereservas-text069">
                    <span>17</span>
                  </span>
                </div>
                <div className="clientefinal-paneldereservas-dayselect18">
                  <span className="clientefinal-paneldereservas-text071">
                    <span>18</span>
                  </span>
                </div>
                <div className="clientefinal-paneldereservas-dayselect19">
                  <span className="clientefinal-paneldereservas-text073">
                    <span>19</span>
                  </span>
                </div>
                <div className="clientefinal-paneldereservas-dayselect20">
                  <span className="clientefinal-paneldereservas-text075">
                    <span>20</span>
                  </span>
                </div>
              </div>
              <div className="clientefinal-paneldereservas-weekly3">
                <div className="clientefinal-paneldereservas-dayselect21">
                  <span className="clientefinal-paneldereservas-text077">
                    <span>21</span>
                  </span>
                </div>
                <div className="clientefinal-paneldereservas-dayselect22">
                  <span className="clientefinal-paneldereservas-text079">
                    <span>22</span>
                  </span>
                </div>
                <div className="clientefinal-paneldereservas-dayselect23">
                  <span className="clientefinal-paneldereservas-text081">
                    <span>23</span>
                  </span>
                </div>
                <div className="clientefinal-paneldereservas-dayselect24">
                  <span className="clientefinal-paneldereservas-text083">
                    <span>24</span>
                  </span>
                </div>
                <div className="clientefinal-paneldereservas-dayselect25">
                  <span className="clientefinal-paneldereservas-text085">
                    <span>25</span>
                  </span>
                </div>
                <div className="clientefinal-paneldereservas-dayselect26">
                  <span className="clientefinal-paneldereservas-text087">
                    <span>26</span>
                  </span>
                </div>
                <div className="clientefinal-paneldereservas-dayselect27">
                  <span className="clientefinal-paneldereservas-text089">
                    <span>27</span>
                  </span>
                </div>
              </div>
              <div className="clientefinal-paneldereservas-weekly4">
                <div className="clientefinal-paneldereservas-dayselect28">
                  <span className="clientefinal-paneldereservas-text091">
                    <span>28</span>
                  </span>
                </div>
                <div className="clientefinal-paneldereservas-dayselect29">
                  <span className="clientefinal-paneldereservas-text093">
                    <span>29</span>
                  </span>
                </div>
                <div className="clientefinal-paneldereservas-dayselect30">
                  <span className="clientefinal-paneldereservas-text095">
                    <span>30</span>
                  </span>
                </div>
                <div className="clientefinal-paneldereservas-dayselect31">
                  <span className="clientefinal-paneldereservas-text097">
                    1
                  </span>
                </div>
                <div className="clientefinal-paneldereservas-dayselect32">
                  <span className="clientefinal-paneldereservas-text098">
                    2
                  </span>
                </div>
                <div className="clientefinal-paneldereservas-dayselect33">
                  <span className="clientefinal-paneldereservas-text099">
                    3
                  </span>
                </div>
                <div className="clientefinal-paneldereservas-dayselect34">
                  <span className="clientefinal-paneldereservas-text100">
                    4
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="clientefinal-paneldereservas-contador">
          <span className="clientefinal-paneldereservas-text101">
            <span>Quedan 04:45</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default PanelShift;
